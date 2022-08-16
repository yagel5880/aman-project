import { useState } from 'react'

const Home = () => { 
    const [nums, setnums] = useState([
        {"id": "1", "phone": "054-7631233" ,"date": "1660636053167" },
        {"id": "2", "phone": "050-7631233" ,"date": "1660636282803" },
        {"id": "3", "phone": "052-7631233" ,"date": "1660636324651" },
    ]);

    const [phoneList, setPhoneList] = useState(''); 
    const [phone, setPhone] = useState('');    
    
    // chenge input and select state
    const handelChangeSelectNumber = (e) => {
        const data = e.target.value;
        setPhoneList(data);
        setPhone(data);
    }

    const handelChengeText = (e) => {
        setPhone(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const obj = {"id":Math.random() * 10  ,"phone": phone, "date": Date.now()};
        let data = nums;   
        if(nums.length >= 5 ) data = data.slice(1);  

        data = [...data, obj];
        setnums(data);
        console.log(data);

        // reset form values 
        setPhoneList('');
        setPhone('');
    }
    
    return (

        
        <form onSubmit={handelSubmit}>
            <label>Last Numbers Calls</label>
            <select value={phoneList} onChange={handelChangeSelectNumber}>
                <option value="">-select-</option>
                {nums.map(num => ( <option key={num.id}>{num.phone}</option> ))} 
            </select>
            <label>Phone Number</label>
            <input type="text" value={phone} onChange={handelChengeText}/>
            <button>Send</button>
        </form>
       
    )    

}

export default Home