import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseData = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditinghandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditinghandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpense;