# TAU Auto Login (Tampermonkey Script)

This Tampermonkey script automatically fills in your login credentials and logs you into the [TAU portal](https://nidp.tau.ac.il/nidp/) — including other platforms that use the TAU login system, like Moodle.

## 🚀 How to Use

1. **Install Tampermonkey Extension**  
   - [Chrome/Firefox](https://tampermonkey.net/)

2. **Install the Script**  
   - Click [here to install the script](./tau-auto-login.user.js) or download the `.user.js` file directly and open it.  
   - Tampermonkey should prompt you to install it.

3. **Configure Your Credentials**  
   - In Tampermonkey, open the script.  
   - Replace the placeholders with your TAU credentials:
     ```javascript
     const username = 'your_username';
     const userID = 'your_id';
     const password = 'your_password';
     ```

4. **Visit the TAU Login Page**  
   - The script will auto-fill your credentials and log you in automatically!

## ⚠️ Disclaimer
- Your credentials are stored locally in the script — **do not share** your customized version with others.
