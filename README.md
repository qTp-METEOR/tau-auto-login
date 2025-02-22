# TAU Auto Login (Tampermonkey Script)

This Tampermonkey script automatically fills in your login credentials and logs you into the [TAU portal](https://nidp.tau.ac.il/nidp/) — including other platforms that use the TAU login system, like Moodle.

---

## 🚀 How to Use

### 1️⃣ Install Tampermonkey Extension  
- Download and install the Tampermonkey extension for your browser:  
  👉 [**Get Tampermonkey for Chrome/Edge/Firefox**](https://tampermonkey.net/)

---

### 2️⃣ (Chrome/Edge Only) Enable Developer Mode  
If you're using **Chrome** or **Edge**, you **must** enable **Developer Mode** for the script to work.

1. **Open Browser Extensions:**  
   - For **Chrome**, go to `chrome://extensions/`.  
   - For **Edge**, go to `edge://extensions/`.

2. **Enable Developer Mode:**  
   - In **Chrome**, toggle **"Developer mode"** in the **top-right corner**.  
   - In **Edge**, toggle **"Developer mode"** on the **left side** at **mid-height**.

3. **Configure Tampermonkey Permissions:**  
   - Find **Tampermonkey** in your list of extensions.  
   - Click **"Details"** and ensure the following settings are enabled:
     - ✅ **"Allow access to file URLs"**  
     - ✅ **"Site access"** → Set to **"On all sites"** or specifically for `https://nidp.tau.ac.il/nidp/*`

4. **Restart your browser** to apply the changes.

✅ **Firefox users:** You can skip this step — no Developer Mode is required.

---

### 3️⃣ Install the Script  

You can install the script in **two ways**:

#### ✅ **Method 1 (Easiest): Direct Install**  
1. Click the link below to open the script:  
   👉 [**Install the Script**](./tau-auto-login.user.js)

2. **Click on "Raw"** in the top right of the GitHub file view.

3. **Tampermonkey** should automatically detect the script and show an **"Install"** prompt.  
   - If you see the prompt, click **"Install"**.

#### 🛠️ **Method 2: Manual Installation**  
1. Click the **Tampermonkey** icon in your browser toolbar (it looks like a square with two circles).  
2. Select **"Create a new script..."**.  
3. Delete any existing code in the editor.  
4. **Copy and paste** the contents of **`tau-auto-login.user.js`** into the editor.  
5. **Save** the script:  
   - Click **File** → **Save**, or press **Ctrl+S**/**Cmd+S**.

---

### 4️⃣ Configure Your Credentials  

1. Click the **Tampermonkey** icon in your browser toolbar.  
2. Go to **Dashboard** → Find **"TAU Auto Login"** and click on it.  
3. In the script editor, locate the following lines:

    ```javascript
    const username = 'your_username';
    const userID = 'your_id';
    const password = 'your_password';
    ```

4. **Replace** the placeholders with your actual TAU credentials. For example:

    ```javascript
    const username = 'john_doe';
    const userID = '123456789';
    const password = 'yourPassword123';
    ```

5. **Save the script**:  
   - Click **File** → **Save**, or press **Ctrl+S**/**Cmd+S**.

✅ Your credentials are now configured!

---

### 5️⃣ Visit the TAU Login Page  
- Go to the [**TAU Login Portal**](https://nidp.tau.ac.il/nidp/).  
- The script will **automatically fill in your credentials** and **log you in**!

---

## ⚠️ Disclaimer
- Your credentials are stored **locally** in the script — **do not share** your customized version with others.  
- This script is intended for **personal use** only.
