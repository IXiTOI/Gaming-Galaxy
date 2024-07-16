function showVideo(element) {
    var videoId = element.getAttribute('data-video-id');
    
    var frame = document.getElementById(videoId);
    if (frame.classList.contains('hidden')) {                
        frame.classList.remove('hidden');
    } else {
        frame.classList.add('hidden');
    }
}