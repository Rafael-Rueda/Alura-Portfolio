var meio = document.querySelector('.header__div2 > ul > li:nth-of-type(4)')
var grid = document.querySelector('.header__div2 > ul')
var rows_value = getComputedStyle(grid).getPropertyValue('grid-template-rows')
var rows = rows_value.split(' ').length;

meio.style.cssText = 'grid-row: 1'
if (rows == 2) {
    meio.style.cssText = 'grid-column: calc(3 / 2) / span 1;'
} else {
    meio.style.cssText = 'grid-column: auto;'
}

window.addEventListener('resize', function() {
    meio.style.cssText = 'grid-row: 1'
    var rows_value = getComputedStyle(grid).getPropertyValue('grid-template-rows')
    var rows = rows_value.split(' ').length;
    if (rows == 2) {
        meio.style.cssText = 'grid-column: calc(3 / 2) / span 1;'
    } else {
        meio.style.cssText = 'grid-column: auto;'
    }
})