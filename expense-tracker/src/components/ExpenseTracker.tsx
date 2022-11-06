import { ChangeEvent, Component, FormEvent } from "react"
import { pushDataFromUser } from "../services/menu";

type Props = {
    onTrue: any
    onClose: any
}

type State = {
    product:string,
    price:number,
    payeeName:string,
    dateOfPayment:string
}

export default class ExpenseTracker extends Component<Props,State>{
   constructor(props :Props){
       super(props);
       this.state = {
           payeeName:"",
           product:"",
           price:0,
           dateOfPayment: ""
       }
   }

   submitHandler = async (event : FormEvent<HTMLFormElement>) => {
       event?.preventDefault()
        const finalData = {
            ...this.state
        }
        const data = await pushDataFromUser(finalData);
        this.props.onTrue()
   }

   setProduct = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
        product:event.target.value});
   }
   setPayeeName = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
        payeeName:event.target.value
    });
   }

   setPrice = (event : ChangeEvent<HTMLInputElement>) => {
    this.setState({
        price : parseInt(event.target.value)
    })
}

    setDateOfPayment = (e : ChangeEvent<HTMLInputElement>) => {
    
    this.setState({
        dateOfPayment : e.target.value,
    })
    }

   render(){
    return (<>
        <section>
            <header>
                <h1>Add New Item</h1>
                <p>Read the below instructions before proceeding:</p>
                <p>Make sure you fill all the fields where * is provided</p>
            </header>
        
        <form onSubmit={this.submitHandler}>
            <article>
                <p>Name</p>
                <select name="Name" required value={this.state.payeeName} 
                onChange={this.setPayeeName}>
                    <option value="" defaultChecked>Choose</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Ramesh">Ramesh</option>
                </select>
            </article>
            <article>
                <p>Product Purchased</p>
                <input type="text" required value={this.state.product} onChange={this.setProduct}></input>
            </article>
            <article>
                <p>Price</p>
                <input type="number" required value={this.state.price} onChange={this.setPrice}/>
            </article>

            <article>
                <p>Date</p>
                <input type="date" required value={this.state.dateOfPayment} onChange={this.setDateOfPayment}/>
            </article>
            <button type="button" className="form-button" onClick={this.props.onClose}>Close</button>
                
            <button type="submit" className="form-button">Submit</button>
        </form>
        </section>
    </>);
   }
}
