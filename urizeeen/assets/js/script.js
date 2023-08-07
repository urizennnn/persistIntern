// Function to create a post element with all its components and append it to the feed container
function createPost(postDetails) {
    // Create the main feed container
    const feed = document.createElement('div');
    feed.classList.add('feed');

    // Create the header section of the post
    const feedHeader = document.createElement('div');
    feedHeader.classList.add('feed-header');

    // Create the user info section inside the header
    const feedUserInfo = document.createElement('div');
    feedUserInfo.classList.add('user-info');

    // Create the profile picture element
    const profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');

    // Create the image element for the profile picture
    const profilePicImg = document.createElement('img');
    profilePicImg.setAttribute("src", postDetails['userDetails']['profileImgURL']);
    profilePicImg.setAttribute("alt", "Profile Picture");

    // Append the profile picture image to its container
    profilePic.appendChild(profilePicImg);

    // Create the profile info section inside the header
    const profileInfo = document.createElement('div');
    profileInfo.classList.add('profile-info');

    // Create the profile name element
    const profileName = document.createElement('div');
    profileName.classList.add('profile-name');
    profileName.innerHTML = postDetails['userDetails']['name'];

    // Check if the user is verified and add the verification icon if applicable
    var isVerified = (postDetails && postDetails['userDetails']['isVerified'] && postDetails['userDetails']['isVerified'] !== '') ? postDetails['userDetails']['isVerified'] : false;
    if (isVerified) {
        profileName.innerHTML += "<svg aria-label='Verified' class='x1lliihq x1n2onr6' color='rgb(0, 149, 246)' fill='rgb(0, 149, 246)' height='12' role='img' viewBox='0 0 40 40' width='12'><title>Verified</title><path d='M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z' fill-rule='evenodd'></path></svg>";
    }

    // Create the visibility and profile distance section inside the header
    const feedVisibilityAndProfileDistance = document.createElement('div');
    feedVisibilityAndProfileDistance.classList.add('visiblity-and-distance');

    // Create the visibility info element
    const visibilityInfo = document.createElement('span');
    visibilityInfo.classList.add('visibility');

    // Create the icon for visibility
    const visibilityInfoIcon = document.createElement('div');
    visibilityInfoIcon.classList.add('icon');

    // Determine the visibility icon based on the post's visibility
    var icon = (postDetails['postInfo']['visibility'] === "private") ? ' <i class="fa fa-lock" aria-hidden="true"></i>' : (postDetails['postInfo']['visibility'] === "friends") ? ' <i class="fa fa-user-group" aria-hidden="true"></i>' : ' <i class="fa fa-globe" aria-hidden="true"></i>';
    visibilityInfoIcon.innerHTML = icon;

    // Create the text for visibility info
    const visibilityInfoText = document.createElement('div');
    visibilityInfoText.classList.add('text');
    visibilityInfoText.innerHTML = (postDetails['postInfo']['visibility'] && postDetails['postInfo']['visibility'] !== '') ? postDetails['postInfo']['visibility'] : 'public';

    // Append the icon and text for visibility info to the visibility info element
    visibilityInfo.appendChild(visibilityInfoIcon);
    visibilityInfo.appendChild(visibilityInfoText);

    // Create the distance info element
    const distanceInfo = document.createElement('span');
    distanceInfo.classList.add('distance');

    // Create the icon for distance info
    const distanceInfoIcon = document.createElement('div');
    distanceInfoIcon.classList.add('icon');
    distanceInfoIcon.innerHTML = ' <i class="fa fa-map-pin" aria-hidden="true"></i>';

    // Create the text for distance info
    const distanceInfoText = document.createElement('div');
    distanceInfoText.classList.add('text');
    distanceInfoText.innerHTML = postDetails['userDetails']['userNeighbourhoodRadius'];

    // Append the icon and text for distance info to the distance info element
    distanceInfo.appendChild(distanceInfoIcon);
    distanceInfo.appendChild(distanceInfoText);

    // Append the visibility info and distance info elements to the visibility and profile distance section
    feedVisibilityAndProfileDistance.appendChild(visibilityInfo);
    feedVisibilityAndProfileDistance.appendChild(distanceInfo);

    // Create the feed posted date element
    const feedPostedDate = document.createElement('div');
    feedPostedDate.classList.add();
    feedPostedDate.innerHTML = postDetails['postInfo']['datePosted'];

    // Append the profile name, visibility and distance info, and posted date to the profile info section
    profileInfo.appendChild(profileName);
    profileInfo.appendChild(feedVisibilityAndProfileDistance);
    profileInfo.appendChild(feedPostedDate);

    // Append the profile picture and profile info to the user info section
    feedUserInfo.appendChild(profilePic);
    feedUserInfo.appendChild(profileInfo);

    // Create the feed menu section
    const feedMenu = document.createElement('div');
    feedMenu.classList.add('feed-menu');

    // Create the feed menu icon
    const feedMenuIcon = document.createElement('div');
    feedMenuIcon.classList.add('icon');
    feedMenuIcon.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z'/></svg>";

    // Append the feed menu icon to the feed menu section
    feedMenu.appendChild(feedMenuIcon);

    // Append the user info section and feed menu section to the feed header
    feedHeader.appendChild(feedUserInfo);
    feedHeader.appendChild(feedMenu);

    // Create the feed body section
    const feedBody = document.createElement('div');
    feedBody.classList.add('feed-body');

    // Create the feed caption element
    const feedCaption = document.createElement('div');
    feedCaption.classList.add('caption');
    feedCaption.innerHTML = (postDetails['postInfo']['caption']) ? postDetails['postInfo']['caption'] : '';

    // Create the feed medias section
    const feedMedias = document.createElement('div');
    feedMedias.classList.add('feed-medias');

    // Check if the post has images and add them to the feed medias section
    if (typeof postDetails['postInfo']['medias']['images'] === 'string' && postDetails['postInfo']['medias']['images'].length != 0) {
        console.log(true);
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('feed-media');

        const mediaImg = document.createElement('img');
        mediaImg.setAttribute("src", postDetails['postInfo']['medias']['images']);
        mediaImg.setAttribute("alt", "media");

        mediaContainer.appendChild(mediaImg);
        feedMedias.appendChild(mediaContainer);
    } else if (postDetails['postInfo']['medias']['images'] && typeof postDetails['postInfo']['medias']['images'] === "object") {
        // If the post has multiple images, loop through them and add each one to the feed medias section
        for (let i = 0; i < postDetails['postInfo']['medias']['images'].length; i++) {
            const imageURL = postDetails['postInfo']['medias']['images'][i];
            const mediaContainer = document.createElement('div');
            mediaContainer.classList.add('feed-media');

            const mediaImg = document.createElement('img');
            mediaImg.setAttribute("src", imageURL);
            mediaImg.setAttribute("alt", "media");

            mediaContainer.appendChild(mediaImg);
            feedMedias.appendChild(mediaContainer);
        }
    }

    // Check if the post has videos and add them to the feed medias section
    if (typeof postDetails['postInfo']['medias']['videos'] === 'string' && postDetails['postInfo']['medias']['videos'].length != 0) {
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('feed-media');

        const mediavid = document.createElement('vid');
        mediavid.setAttribute("src", postDetails['postInfo']['medias']['videos']);
        mediavid.setAttribute("alt", "media");

        mediaContainer.appendChild(mediavid);
        feedMedias.appendChild(mediaContainer);
    } else if (postDetails['postInfo']['medias']['videos'] && typeof postDetails['postInfo']['medias']['videos'] === "object") {
        // If the post has multiple videos, loop through them and add each one to the feed medias section
        for (let i = 0; i < postDetails['postInfo']['medias']['videos'].length; i++) {
            const imageURL = postDetails['postInfo']['medias']['videos'].length[i];
            const mediaContainer = document.createElement('div');
            mediaContainer.classList.add('feed-media');

            const mediavid = document.createElement('vid');
            mediavid.setAttribute("src", imageURL);
            mediavid.setAttribute("alt", "media");

            mediaContainer.appendChild(mediavid);
            feedMedias.appendChild(mediaContainer);
        }
    }

    // Append the feed caption and feed medias to the feed body
    feedBody.appendChild(feedCaption);
    feedBody.appendChild(feedMedias);

    // Create the feed footer section
    const feedFooter = document.createElement('div');
    feedFooter.classList.add('feed-footer');

    // Create the like, dislike, and comment icons section
    const likeDislikeCommentIcons = document.createElement('div');
    likeDislikeCommentIcons.classList.add('like-dislike-comment-icons');

    // Create the like button
    const likeButton = document.createElement('div');
    likeButton.classList.add('like', 'footer-icon');

    // Create the like icon and text
    const likeIcon = document.createElement('div');
    likeIcon.classList.add('icon', 'like');
    likeIcon.innerHTML = '<i class="far fa-thumbs-up" aria-hidden="true"></i>';
    const likeText = document.createElement('div');
    likeText.classList.add('text');

    // Create the like counter and set its initial value
    const likeCounter = document.createElement('span');
    likeCounter.classList.add('counter');
    likeCounter.innerHTML = postDetails['postInfo']['numberOfLikes'];

    // Append the like counter and "likes" text to the like text element
    likeText.appendChild(likeCounter);
    likeText.innerHTML = likeText.innerHTML + ' likes';

    // Append the like icon and like text to the like button
    likeButton.appendChild(likeIcon);
    likeButton.appendChild(likeText);

    // Create the dislike button
    const dislikeButton = document.createElement('div');
    dislikeButton.classList.add('dislike', 'footer-icon');

    // Create the dislike icon and text
    const dislikeIcon = document.createElement('div');
    dislikeIcon.classList.add('icon');
    dislikeIcon.innerHTML = '<i class="far fa-thumbs-down" aria-hidden="true"></i>';
    const dislikeText = document.createElement('div');
    dislikeText.classList.add('text');

    // Create the dislike counter and set its initial value
    const dislikeCounter = document.createElement('span');
    dislikeCounter.classList.add('counter');
    dislikeCounter.innerHTML = postDetails['postInfo']['numberOfDislikes'];

    // Append the dislike counter and "dislikes" text to the dislike text element
    dislikeText.appendChild(dislikeCounter);
    dislikeText.innerHTML = dislikeText.innerHTML + ' dislikes';

    // Append the dislike icon and dislike text to the dislike button
    dislikeButton.appendChild(dislikeIcon);
    dislikeButton.appendChild(dislikeText);

    // Create the comment button
    const commentButton = document.createElement('div');
    commentButton.classList.add('comment', 'footer-icon');

    // Create the comment icon and text
    const commentIcon = document.createElement('div');
    commentIcon.classList.add('icon');
    commentIcon.innerHTML = '<i class="far fa-comment" aria-hidden="true"></i>';
    const commentText = document.createElement('div');
    commentText.classList.add('text');

    // Create the comment counter and set its initial value
    const commentCounter = document.createElement('span');
    commentCounter.classList.add('counter');
    commentCounter.innerHTML = postDetails['postInfo']['numberOfComments'];

    // Append the comment counter and "comments" text to the comment text element
    commentText.appendChild(commentCounter);
    commentText.innerHTML = commentText.innerHTML + ' comments';

    // Append the comment icon and comment text to the comment button
    commentButton.appendChild(commentIcon);
    commentButton.appendChild(commentText);

    // Append the like, dislike, and comment buttons to the likeDislikeCommentIcons section
    likeDislikeCommentIcons.appendChild(likeButton);
    likeDislikeCommentIcons.appendChild(dislikeButton);
    likeDislikeCommentIcons.appendChild(commentButton);

    // Create the share button
    const shareButton = document.createElement('div');
    shareButton.classList.add('share', 'footer-icon');

    // Create the share icon and text
    const shareIcon = document.createElement('div');
    shareIcon.classList.add('icon');
    shareIcon.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M18,14a4,4,0,0,0-3.08,1.48l-5.1-2.35a3.64,3.64,0,0,0,0-2.26l5.1-2.35A4,4,0,1,0,14,6a4.17,4.17,0,0,0,.07.71L8.79,9.14a4,4,0,1,0,0,5.72l5.28,2.43A4.17,4.17,0,0,0,14,18a4,4,0,1,0,4-4ZM18,4a2,2,0,1,1-2,2A2,2,0,0,1,18,4ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z'/></svg>";
    const shareText = document.createElement('div');
    shareText.classList.add('text');

    // Create the share counter and set its initial value
    const shareCounter = document.createElement('span');
    shareCounter.classList.add('counter');
    shareCounter.innerHTML = postDetails['postInfo']['numberOfShares'];

    // Append the share counter and "shares" text to the share text element
    shareText.appendChild(shareCounter);
    shareText.innerHTML = shareText.innerHTML + ' shares';

    // Append the share icon and share text to the share button
    shareButton.appendChild(shareIcon);
    shareButton.appendChild(shareText);

    // Append the likeDislikeCommentIcons and share button to the feed footer
    feedFooter.appendChild(likeDislikeCommentIcons);
    feedFooter.appendChild(shareButton);

    // Append the feed header, body, and footer to the main feed container
    feed.appendChild(feedHeader);
    feed.appendChild(feedBody);
    feed.appendChild(feedFooter);

    // Append the feed to the feeds container
    document.querySelector('.feeds')?.appendChild(feed);

    // Call the likeAndDislikePost function to set up event listeners for like and dislike buttons
    likeAndDislikePost();
}

// Function to handle like and dislike functionality for posts
function likeAndDislikePost() {
    // Get all feed posts
    const allFeedPosts = document.querySelectorAll('.feed');

    // Loop through each feed post and add event listeners for like and dislike buttons
    allFeedPosts.forEach((feed) => {
        const feedFooter = feed.querySelector('.feed-footer');

        const likeIcon = feedFooter.querySelector('.like');
        const dislikeIcon = feedFooter.querySelector('.dislike');

        // Add event listener for the like button
        likeIcon.addEventListener('click', () => {
            // Toggle the like button class
            likeIcon.classList.toggle('liked');

            // Update the like counter based on the like button state
            const likeCounter = feedFooter.querySelector('.like .counter');
            if (likeIcon.classList.contains('liked')) {
                likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
            } else {
                likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1;
            }
        });

        // Add event listener for the dislike button
        dislikeIcon.addEventListener('click', () => {
            // Toggle the dislike button class
            dislikeIcon.classList.toggle('disliked');

            // Update the dislike counter based on the dislike button state
            const dislikeCounter = feedFooter.querySelector('.dislike .counter');
            if (dislikeIcon.classList.contains('disliked')) {
                dislikeCounter.innerHTML = parseInt(dislikeCounter.innerHTML) + 1;
            } else {
                dislikeCounter.innerHTML = parseInt(dislikeCounter.innerHTML) - 1;
            }
        });
    });
}
