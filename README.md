# Custom Cursor in React.js

This project implements a custom cursor effect in a React.js application using the **Kursor** library. It provides a smooth, animated cursor that enhances user interaction and experience.

## **Demo:**
Check out the Kursor library: [Kursor by lusaxweb](https://lusaxweb.github.io/Kursor/)

## **Installation:**

1. Install the Kursor library:
   ```bash
   npm install kursor
   ```

2. Import and use Kursor in your React component:

   ```javascript
   import { useEffect } from 'react';
   import Kursor from 'kursor';

   function App() {
     useEffect(() => {
       new Kursor({
         type: 1, // Customize cursor type
         removeDefaultCursor: true,
         color: '#000' // Customize cursor color
       });
     }, []);

     return <div className="App">Your content here</div>;
   }

   export default App;
   ```

## **Usage:**

Run your React application to see the custom cursor in action:

```bash
npm run dev
```

Customize the cursor behavior and appearance using the Kursor configuration options.