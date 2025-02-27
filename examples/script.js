tailwind.config = {
    theme: {
        extend: {
            colors: {
                'riyal-green': '#2f704a',
                'riyal-light': '#e6f0eb',
                'riyal-dark': '#235636',
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const fontSizeSlider = document.getElementById("fontSizeSlider");
    const fontSizeValue = document.getElementById("fontSizeValue");
    const dynamicText = document.querySelector(".dynamic-text");
    const colorPickerPanel = document.getElementById("colorPickerPanel");
    const colorPickerToggle = document.getElementById("colorPickerToggle");
    
   
    const primaryColorPicker = document.getElementById("primaryColorPicker");
    const accentColorPicker = document.getElementById("accentColorPicker");
    const riyalColorPicker = document.getElementById("riyalColorPicker");
    const cardBgColorPicker = document.getElementById("cardBgColorPicker");
    
    
    colorPickerToggle.addEventListener("click", function() {
        colorPickerPanel.classList.toggle("collapsed");
    });
    
 
    fontSizeSlider.addEventListener("input", function () {
        const newSize = fontSizeSlider.value + "px";
        fontSizeValue.innerText = newSize;
        dynamicText.style.fontSize = newSize;
    });

 
    function updateThemeColors() {
        const primaryColor = primaryColorPicker.value;
        const accentColor = accentColorPicker.value;
        const riyalColor = riyalColorPicker.value;
        const cardBgColor = cardBgColorPicker.value;
        
        
        const darkenColor = (color) => {
            const r = parseInt(color.substr(1, 2), 16);
            const g = parseInt(color.substr(3, 2), 16);
            const b = parseInt(color.substr(5, 2), 16);
            
            const darkenFactor = 0.8; // 20% darker
            
            const newR = Math.floor(r * darkenFactor);
            const newG = Math.floor(g * darkenFactor);
            const newB = Math.floor(b * darkenFactor);
            
            return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
        };
        
      
        const lightenColor = (color) => {
            const r = parseInt(color.substr(1, 2), 16);
            const g = parseInt(color.substr(3, 2), 16);
            const b = parseInt(color.substr(5, 2), 16);
            
            const lightenFactor = 0.9; // Mix with 90% white
            
            const newR = Math.floor(r + (255 - r) * lightenFactor);
            const newG = Math.floor(g + (255 - g) * lightenFactor);
            const newB = Math.floor(b + (255 - b) * lightenFactor);
            
            return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
        };
        
        const primaryDark = darkenColor(primaryColor);
        const primaryLight = lightenColor(primaryColor);
        
    
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--primary-dark', primaryDark);
        document.documentElement.style.setProperty('--primary-light', primaryLight);
        document.documentElement.style.setProperty('--accent-color', accentColor);
        document.documentElement.style.setProperty('--riyals-color', riyalColor);
        document.documentElement.style.setProperty('--card-bg', cardBgColor);
        
    
        colorPickerToggle.style.backgroundColor = primaryColor;
    }
    
   
    primaryColorPicker.addEventListener("input", updateThemeColors);
    accentColorPicker.addEventListener("input", updateThemeColors);
    riyalColorPicker.addEventListener("input", updateThemeColors);
    cardBgColorPicker.addEventListener("input", updateThemeColors);
    
  
    const presetColors = document.querySelectorAll('.preset-color');
    presetColors.forEach(preset => {
        preset.addEventListener('click', function() {
            const primary = this.getAttribute('data-primary');
            const accent = this.getAttribute('data-accent');
            const riyal = this.getAttribute('data-riyal');
            
            primaryColorPicker.value = primary;
            accentColorPicker.value = accent;
            riyalColorPicker.value = riyal;
            
            updateThemeColors();
        });
    });
    
    updateThemeColors();
});

function toggleSuperSub(type) {
    let el = document.getElementById("superSub");
    if (type === "super") {
        el.style.verticalAlign = "super";
        el.style.fontSize = "0.7em"; 
    } else {
        el.style.verticalAlign = "sub";
        el.style.fontSize = "0.7em";
    }
}

const options = { day: 'numeric', month: 'long', year: 'numeric' };
const currentDate = new Date().toLocaleDateString('ar-EG', options);
document.getElementById("date").textContent = `تاريخ: ${currentDate}`;