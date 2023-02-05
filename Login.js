import { authentication } from 'wix-members';

$w.onReady(function () {
  const loginMember = async () => {
    
    const email = $w("#email").value;
    const password = $w("#password").value;
    try {
      const memberIsLoggedIn = await authentication.login(email, password)
      console.log(memberIsLoggedIn);
      $w("#successMessage").text = "log in success!";
      $w("#successMessage").show();
    } catch (error) {
      console.log(error);
      $w("#errorMessage").text = "error. try again";
      $w("#errorMessage").show();
    }
  }
  
  $w("#submitButton").onClick(loginMember);
});
