
$(document).ready(() => {
  // VARIABLE DECLARATION
  // create tweet button to append twiddlerTitle
  const $tweetButton = $('#new-tweets');

  // create tweet button to append twiddlerTitle
  const $sendTweetButton = $('<div><button type="submit" class="button">Send Tweet</button></div>')
    .insertBefore("#header-title");

  // create header title div to prependTo tweetButton
  const $twiddlerTitle = $('#header').prepend('#twiddler | #WeWasteYourTime | #AndYouLoveUsForIt');

  // variable for twiddler icon in header
  const $twiddlerIcon = $('#twiddler-icon')
    .appendTo("#header-title");
  
  // creates empty body to later add new tweets
  const $body = $('body');
  $body.html('');

 
  // PATE STARTING tweets variable by mapping the array streams.home
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $(`<div id= ${tweet.user} class="tweets"></div>`);
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);

    return $tweet;
  });

  // SECTION for top of twiddler feed
  const $feedTop = $('<div class="top-of-feed"></div>');
    // $feedTop.append('body').text('you need more');

  // ADDS TWEETS to the empty body
  $body.append($tweets)
    .addClass("body");

  // BUTTONS to top of body
  $twiddlerTitle.prependTo($body)
    .append($tweetButton);

  // ACTIONS & ANIMATIONS
  // RELOAD BUTTON on Icon & title variable for a single, random user
    $('#header-title').click(function() {
    location.reload();
    });
  
  // BUTTON CLICK to Show user new tweets on button click with TIME UPDATE
  $tweetButton.on('click', function () {

    const $buttonUpdate = streams.home.map((tweet) => {
    const $buttonTweet = $(`<div id= ${tweet.user} class="tweets"></div>`);
    const $tweetTime = tweet.created_at;
    const newText = `@${tweet.user}: ${tweet.message} | ${moment().calendar($tweetTime)}`;

    // $('.tweets').replaceWith($buttonTweet);
    $buttonTweet.text(newText);
    console.log($buttonTweet);

    $body.prepend($buttonTweet)
    .addClass("body");
    return $buttonTweet;
    });
     $('.tweets').on('click', function (e) {
     let i = e.target;
     console.log(i);
      const filteredUser = streams.home.filter((tweet) => {
      return tweet.user === i.id;
    });
     $('.tweets').replaceWith(filteredUser);
     console.log(filteredUser);
     filteredUser.map((tweet) => {
      const $buttonTweet = $(`<div id= ${tweet.user} class="tweets"></div>`);
      const $tweetTime = tweet.created_at;
      const newText = `@${tweet.user}: ${tweet.message} | ${moment().calendar($tweetTime)}`;
        
    $buttonTweet.text(newText);
      console.log($buttonTweet);
       
    $body.prepend($buttonTweet)
      .addClass("body");
      return $buttonTweet;
     });
   });
  });

  // CLICK USER NAME to show only feed of that user
  // create click function for username
  // create an anchor link for username
  // clear 'body' first MAYBE?
  // filter through the users for that username
  // populate tweets from that filtered array per that username
  // create another button that refreshes the page
  // create click function to refresh window
  
   $('.tweets').on('click', function (e) {
     let i = e.target;
     console.log(i);
      const filteredUser = streams.home.filter((tweet) => {
      return tweet.user === i.id;
    });
     $('.tweets').replaceWith(filteredUser);
     console.log(filteredUser);
     filteredUser.map((tweet) => {
      const $buttonTweet = $(`<div id= ${tweet.user} class="tweets"></div>`);
      const $tweetTime = tweet.created_at;
      const newText = `@${tweet.user}: ${tweet.message} | ${moment().calendar($tweetTime)}`;
        
    $buttonTweet.text(newText);
      console.log($buttonTweet);
       
    $body.prepend($buttonTweet)
      .addClass("body");
      return $buttonTweet;
     });
   });

  // CREATE VISITOR prototype
  // function Visitor(visitor) {
  //   this.visitor = guest;
  // }

  // Visitor.prototype.visitor = function () {
  //   return this.visitor;
  // }
  
  // CREATE FORM to ALLOW USER TO TWEET a custom message 
  const userTweet = $('<form class="tweet-form"></form>').prependTo($twiddlerTitle)
    .append('<input id="userTweetText" type="text"></input>')
    .append($sendTweetButton)

  $(userTweet).submit(function (e) {
    e.preventDefault();
      const $customTweet = $(`<div id="visitor" class="tweets"></div>`);
      const $tweetTime = new Date();
      const $tweetInput = $('#userTweetText').val()
      const visitorTweet = `@visitor: ${$tweetInput} | ${moment().calendar($tweetTime)}`;
      
    $customTweet.append(visitorTweet);
    
    $body.prepend($customTweet);
  });
  
  
  // create input fields for user to enter username and tweet
  // create button to tweet
  // create click function
  // function submits visitor tweet


});
