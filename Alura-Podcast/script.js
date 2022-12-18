var video_width = Number(document.querySelector('.video').offsetWidth)
var video_img2 = document.querySelectorAll('.video img:nth-of-type(2)')

if(video_width < 225) {
    for (c = 0 ; c < video_img2.length ; c++ ) {
        video_img2[c].style.cssText = 'display: none;'
    }
    
} else {
    for (c = 0 ; c < video_img2.length ; c++ ) {
        video_img2[c].style.cssText = 'display: inline;'
    }
}

window.addEventListener('resize', function() {
    document.querySelector('body').style.height = '100vh'
    video_width = Number(document.querySelector('.video').offsetWidth)
    if(video_width < 225) {
        for (c = 0 ; c < video_img2.length ; c++ ) {
            video_img2[c].style.cssText = 'display: none;'
        }
        
    } else {
        for (c = 0 ; c < video_img2.length ; c++ ) {
            video_img2[c].style.cssText = 'display: inline;'
        }
    }
})
