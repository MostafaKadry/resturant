export const Login = () => {
  return `
    <div class="login-black-back open">
   <div class="login-close">
   <i class="fa-solid fa-xmark fa-xmark-login"></i>
   </div>
        <div class="login-container">
        <div class="login-body">
        <h3 class="login-heading">Log in to Your Account</h3>
        <div class="fields-content">
        <div class="field-group"> 
        <input id="user" type="text" class="user_name"
         placeholder="Username" data-validate="Required Field">
         <i class="fa-solid fa-user"></i>
         </div>
         <div class="field-group"> <input id="pass" type="password" class="input password"
          placeholder="Password" data-validate="Required Field"> <i class="fa-solid fa-lock"></i></div>
          <div 
          class="field-group field-footer-group">
           <button type="button" class="button button-login">Log In</button>
          </div>
          </div>
          
        <div class="login-footer"> <a href="#" class="btn-sign-up"> Sign Up</a></div>
        <div class="login-forgot-pass"><a href="https://demo.casethemes.net/organio/my-account/lost-password">Forgot your password?</a></div>
            </div>
        </div>
    </div>
    `;
};
