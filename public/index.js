const shareBtn = document.querySelector('.share-button');

// grab the page’s title and URL 
const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;


shareBtn.addEventListener("click", async function(event){
   event.preventDefault(); 
   console.log('You clicked me!');
   try {
      await navigator.share({
        title: 'WebShare API Demo',
        url
      })
      console.log('success!')
   } catch (err) {
      await navigator.clipboard.writeText(url);
      alert('Copied text to clipboard: ' + url);
      //console.error("Share failed:", err.message);
    }
 });

 shareBtn.addEventListener("mouseover", function(event){
    console.log('You hovered me!');
 });