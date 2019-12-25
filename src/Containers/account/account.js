import React, { Component } from 'react';
import classes from './account.module.css'

class Account extends Component{
    defaultImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s"
    state={
        pageData:JSON.parse(localStorage.getItem("Response")).accountsPage,
        accountType:'',
        avatar:this.defaultImage,
        name:'',
        email:'',
        password:'',
        phone:''
    }
    deleteAccount=()=>
    {
        let account=this.state.accountType
        let object=JSON.parse(localStorage.getItem("Response"))
        switch(account)
        {
            case 'Admin':delete object.accountsPage.Admin
                        this.setState({
                            accountType:'',
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s',
                            name:'',
                            email:'',
                            password:'',
                            phone:''
                            })
                        break;
            case 'Merchant':delete object.accountsPage.Admin
                            this.setState({
                                accountType:'',
                                avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s',
                                name:'',
                                email:'',
                                password:'',
                                phone:''
                                })
                            break;
            case 'Editor':delete object.accountsPage.Admin
                        this.setState({
                            accountType:'',
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s',
                            name:'',
                            email:'',
                            password:'',
                            phone:''
                            })
                            break;
            case 'Customer':delete object.accountsPage.Admin
                        this.setState({
                            accountType:'',
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s',
                            name:'',
                            email:'',
                            password:'',
                            phone:''
                            })
                            break;
            default:alert("Cant Delete default account")
                    break;
        }
        localStorage.setItem("Response",JSON.stringify(object))
    }
    updateAccount=()=>{
        let account=this.state.accountType
        let object=JSON.parse(localStorage.getItem("Response"))
        switch(account)
        {
            case 'Admin':object.accountsPage.Admin.name=this.state.name
                        object.accountsPage.Admin.email=this.state.email
                        object.accountsPage.Admin.password=this.state.password
                        object.accountsPage.Admin.phone=this.state.phone
                break;
            case 'Merchant':object.accountsPage.Merchant.name=this.state.name
                            object.accountsPage.Merchant.email=this.state.email
                            object.accountsPage.Merchant.password=this.state.password
                            object.accountsPage.Merchant.phone=this.state.phone
                break;
            case 'Editor':object.accountsPage.Editor.name=this.state.name
                        object.accountsPage.Editor.email=this.state.email
                        object.accountsPage.Editor.password=this.state.password
                        object.accountsPage.Editor.phone=this.state.phone
                break;
            case 'Customer':object.accountsPage.Customer.name=this.state.name
                            object.accountsPage.Customer.email=this.state.email
                            object.accountsPage.Customer.password=this.state.password
                            object.accountsPage.Customer.phone=this.state.phone
                break;
            default:alert("Cant Change values of default account")
                    break;
        }
        localStorage.setItem("Response",JSON.stringify(object))
    }
    onInputChange=(e,name)=>
    {
        let value=e.target.value
        switch(name)
        {
            case 'accountName':this.setState({name:value})
                                break;
            case 'accountEmail':this.setState({email:value})
                                break;
            case 'accountPassword':this.setState({password:value})
                                    break;
            case 'accountPhone':this.setState({phone:value})
                                    break;
            default:break;
        }
    }
    onAccountSelection=(e)=>{
        let tempAccountType=e.target.value
        let data=this.state.pageData
        switch(tempAccountType)
        {
            case 'Admin':this.setState({
                                    accountType:tempAccountType,
                                    avatar:data.Admin.profilePic,
                                    name:data.Admin.name,
                                    email:data.Admin.email,
                                    password:data.Admin.password,
                                    phone:data.Admin.phone
                                })
                break;
            case 'Editor':this.setState({
                accountType:tempAccountType,
                avatar:data.Editor.profilePic,
                name:data.Editor.name,
                email:data.Editor.email,
                password:data.Editor.password,
                phone:data.Editor.phone
            })
                break;
            case 'Merchant':this.setState({
                accountType:tempAccountType,
                avatar:data.Merchant.profilePic,
                name:data.Merchant.name,
                email:data.Merchant.email,
                password:data.Merchant.password,
                phone:data.Merchant.phone
            })
                break;
            case 'Customer':this.setState({
            accountType:tempAccountType,
            avatar:data.Customer.profilePic,
            name:data.Customer.name,
            email:data.Customer.email,
            password:data.Customer.password,
            phone:data.Customer.phone
            })
                break;
            default:this.setState({
                accountType:'',
                avatar:this.defaultImage,
                name:'',
                email:'',
                password:'',
                phone:''
                })
                    break;
        }
        
    }
    deleteImage=()=>
    {
        if(this.state.accountType==='')
            alert("you can not delete default picture")
        else{
            this.setState({avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyotodhebYMRdtMG7M3SkXv_qq4DRFP4UVyNTI2qTalDn8U6&s"})
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        let currentAccount=this.state.accountType
        
        switch(currentAccount)
        {
            case 'Admin':tempObject.accountsPage.Admin.profilePic=''
                            break;
            case 'Merchant':tempObject.accountsPage.Admin.profilePic=''
                            break;
            case 'Editor':tempObject.accountsPage.Admin.profilePic=''
                            break;
            case 'Customer':tempObject.accountsPage.Admin.profilePic=''
                            break;
            default:break;
        }
        localStorage.setItem("Response",JSON.stringify(tempObject))}
    }
    onImageUpload=(e)=>
    {
        let account=this.state.accountType
        let object=JSON.parse(localStorage.getItem("Response"))
        console.log(e.target.files)
        if(e.target.files && e.target.files[0])
        {
            let reader=new FileReader()
            reader.onload=(e)=>{
                let imgSrc=e.target.result
                this.setState({avatar:e.target.result})
                switch(account)
                {
                    case 'Admin':object.accountsPage.Admin.profilePic=imgSrc;
                                    break;
                    case 'Merchant':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Editor':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Customer':object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    default:alert("Cant change default image");
                                break;
                }
                localStorage.setItem("Response",JSON.stringify(object ))
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    render(){
        return(
            <div className={classes.accountPage}>
                <div className={classes.accountPageContainer}>
                    <div className={classes.listContiner}>
                        <h2>List of Accounts</h2>
                        <p>Accounts</p>
                        <select className={classes.dropdown} onChange={(e)=>{this.onAccountSelection(e)}}>
                            <option value="default">Select Account</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                            <option value="Merchant">Merchant</option>
                            <option value="Customer">Customer</option>
                        </select>
                    </div>
                    <div className={classes.accountContainer}>
                        <div className={classes.avatar}>
                            <h2>Change Avatar</h2>
                                <img src={this.state.avatar} alt="avatar"></img>
                                <i className="far fa-trash-alt tm-product-delete-icon" onClick={this.deleteImage}></i>
                                <input type='file' name='pic' id='pic' accept='image/*' onChange={(e)=>this.onImageUpload(e)}/>
                                <label for='pic'>Upload new photo</label>
                        </div>
                        <div className={classes.accountCredentialsContainer}>
                            <h2>Account Settings</h2>
                            <form className={classes.accountForm} onSubmit={(e)=>e.preventDefault()}>
                            <div className={classes.formGroup}>
                                <label htmlFor="accountname">Account Name</label>
                                <input name="accountname" type="text" className={classes.form}  value={this.state.name}  onInput={(e)=>this.onInputChange(e,'accountName')}></input>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="email">Account Email</label>
                                <input name="email" type="email" className={classes.form}  value={this.state.email}  onInput={(e)=>this.onInputChange(e,'accountEmail')}></input>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" className={classes.form}  value={this.state.password}  onInput={(e)=>this.onInputChange(e,'accountPassword')}></input>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="password">Re-enter Password</label>
                                <input name="password" type="password" className={classes.form}  defaultValue='' ></input>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="phone">Phone</label>
                                <input name="phone" type="number" className={classes.form}  value={this.state.phone} onInput={(e)=>this.onInputChange(e,'accountPhone')}></input>
                            </div>
                            <div className={classes.formGroup}>
                                <button style={{width:"90%"}} type="submit" onClick={this.updateAccount}>UPDATE YOUR PROFILE</button>
                            </div>
                            <button className={classes.deleteBtn} type="submit" onClick={this.deleteAccount}>DELETE YOUR ACCOUNT</button>
                            </form> 
                        </div>
                    </div>
                </div>
                {/* <div className="acc-container">
                    <div className="loa-con">
                        <h2>List of Accounts</h2>
                        <p>Accounts</p>
                        <select className="dropdown" onChange={(e)=>{this.onAccountSelection(e)}}>
                            <option value="0">Select Account</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                            <option value="Merchant">Merchant</option>
                            <option value="Customer">Customer</option>
                        </select>
                    </div>
                    <div className="as-con">
                        <div className="avatar-con">
                            <h2>Change Avatar</h2>
                            <img src={this.state.avatar} alt="avatar"/>
                            <button className="upload-btn">UPLOAD NEW PHOTO</button>
                        </div>
                        <div className="set-con">
                            <h2>Account Settings</h2>
                            <form className="acc-form">
                               <div className="formGroup">
                                   <label for="accountname">Account Name</label>
                                   <input name="accountname" type="text" className="form" id="accountname" value={this.state.name} required></input>
                               </div>
                               <div className="formGroup">
                                   <label for="email">Account Email</label>
                                   <input name="email" type="email" className="form" id="email" value={this.state.email} required></input>
                               </div>
                               <div className="formGroup">
                                   <label for="password">Password</label>
                                   <input name="password" type="password" className="form" id="password" defaultValue='' required></input>
                               </div>
                               <div className="formGroup">
                                   <label for="password">Re-enter Password</label>
                                   <input name="password" type="password" className="form" id="password" defaultValue='' required></input>
                               </div>
                               <div className="formGroup">
                                   <label for="phone">Phone</label>
                                   <input name="phone" type="number" className="form" id="phone" value={this.state.phone} required></input>
                               </div>
                               <button className="update-btn">UPDATE YOUR PROFILE</button>
                               <div className="formGroup">
                                   <button className="delete-btn">DELETE YOUR ACCOUNT</button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
       )
    }
}
    
export default Account;