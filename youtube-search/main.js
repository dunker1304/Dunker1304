let textSearch = "";
let isLoadingMore = false;
let nextPageToken = "";
$('#search').on('submit', function(event){
    event.preventDefault();
    textSearch = $('#search :text').val();
    //console.log(textSearch);


    $('#result-list').html('');
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${textSearch}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
        method: 'GET',
        success: function(data){
            if(data.nextPageToken) nextPageToken = data.nextPageToken;
            
            loadVideo(data);
            if(data.items.length==0){
                $('#result-list').append('<div class="none-result"><b>Không tìm thấy kết quả</b></div>');
            }
            else if(!nextPageToken){
                $('#result-list').append('<b>Run out of result</b>');
            }
        },
        error: function(){
            console.log('Ajax fail');
            isLoadingMore = false;
        }
    })
})   // end submit event

$(window).scroll(function() {
    if(($(document).height() - ($(window).scrollTop() + $(window).height())) < 600   ) {
        
            
            if(!isLoadingMore && nextPageToken != ""){
                isLoadingMore = true;
                $.ajax({
                    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${textSearch}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${nextPageToken}`,
                    method: 'GET',
                    success: function(data){
                        loadVideo(data);
                        
                          
                    }, // end success
                    error: function(){
                        isLoadingMore = false;
                        console.log('Ajax fail');
                    }
                   }) // end ajax
                   
            }
                
    }
 });   // window scroll


function loadVideo(data){
    
            console.log("Success", data);
            $('.lds-dual-ring').css("display","inline-block");  
            /*
            for(let i=0;i<data.items.length;i++){
                let title = data.items[i].snippet.title;
                let description =  data.items[i].snippet.description;
                let thumbnail_med = '';
                if(data.items[i].snippet.thumbnails){
                    thumbnail_med = data.items[i].snippet.thumbnails.high.url;
                }
                else{
                    thumbnail_med = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLLltFwPtAM_uf3LKXgqmLYe5yqc8d6HtBQ9cg9i0H6vgWTPV-A';
                }
                
                let videoID = data.items[i].id.videoId;

                // add DOM element to html
                $('#result-list').append(`
                <a class="result col-md-12" href="https://www.youtube.com/watch?v=${videoID}?autoplay=true" target="_blank">
                    
                        <img src="${thumbnail_med}" alt="">
                        <div class="video-info">
                            <h2 class="title">${title}</h2>
                            <p class="description">${description}</p>
                            <span>View >></span>
                        </div>
                    
                    
                </a>
                <br>
                <br>
                <br>  `);  // end append
                

                


            }  // end for loop
            */
            // add by  map: large string
            let videoListItem = data.items.map(function(videoItem) {
                return `
                    <a class="result col-md-12" href="https://www.youtube.com/watch?v=${videoItem.id.videoId}?autoplay=true" target="_blank">
                        <img src="${videoItem.snippet.thumbnails.high.url}" alt="">
                        <div class="video_info">
                            <h2 class="title">${videoItem.snippet.title}</h2>
                            <p class="description">${videoItem.snippet.description}</p>
                            <span>View >></span>
                        </div>
                    </a>
                    <br>
                    <br>
                    <br>
                `;
            });
            $('#result-list').append(videoListItem);
            $('.lds-dual-ring').css("display","none");  
            
            
            isLoadingMore = false;
} // end loadVideo function
    

/*        
var autoRun = setInterval('autoSearch()',4000);

function autoSearch(){
    $('#search :submit').click();
}
*/

// pre load
    // dont run $(window).load();
    $(window).on('load', function(){
        $('.pre-load').fadeOut('slow');
    })

    

    
    
