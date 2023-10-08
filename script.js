document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = "I'm a 24-year-old IT student who is passionate about creating innovative solutions through writing apps and learning from them.";
  
    const aboutMeElement = document.getElementById('aboutMe');
    let aboutMeIndex = 0;
  
    function typeAboutMe() {
      aboutMeElement.innerHTML = aboutMeText.slice(0, aboutMeIndex);
      aboutMeIndex++;
      if (aboutMeIndex <= aboutMeText.length) {
        setTimeout(typeAboutMe, 50); // Adjust the typing speed if needed
      }
    }
  
    typeAboutMe();
  });
  