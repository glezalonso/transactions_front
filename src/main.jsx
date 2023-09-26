import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import TransactionState from './context/TransactionState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<TransactionState>
<App />
</TransactionState>

)
