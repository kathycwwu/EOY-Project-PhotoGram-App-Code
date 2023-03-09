let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];
let photos = [];
let posts = $(".posts").val();
let add = $(".submit").val();

$(".submit").click(function() {
    $(".posts").empty();
    let input = $("input").val();
    photos.push(input);
    for (let photo of photos) {
        $(".posts").append("<img src=" + photo + ">");
    }

    if (photos.length === 3) {
        console.log(3);
        $(".message").text("Congrats, you are a Silver Level user!");
    }
    else if (photos.length === 5) {
        $(".message").text("Congrats, you are a Gold Level user!");
    }
    else if (photos.length > 5) {
        console.log(" a lot");
        $(".message").text("Congrats, you are a Platinum Level user!");
    }
});

photos.push(mostPopularPhotos[1]);
for (let photo of photos) {
    $(".liked-photo").append("<img src=" + photo + ">");
} 