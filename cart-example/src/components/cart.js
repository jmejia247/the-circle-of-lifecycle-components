import { Component } from 'react'

class Cart extends Component {

    constructor() {
        super()
        this.state = {
            memo: '',
            person: null
        }
        console.log("Under Construction")
    }

    // async componentDidMount() { 
    //     const response = await fetch('https://api.agify.io?name=' + this.props.name)
    //     const data = await response.json()
    //     setTimeout(() =>{
    //         console.log('Component Did Mount')
    //         // if you add setState you will cause a rerender
    //         // this.setState({memo: 'Component Did Mount'})
    //         this.setState({person: data})
    //     }, 3000)
    // }

    componentDidMount() {
        fetch('https://api.agify.io?name=' + this.props.name).then((response) => {
            return response.json()
        }).then((data) => {
            setTimeout(() => {
                console.log('Component Did Mount')
                this.setState({person: data})
            }, 3000)
        })
    }

    componentWillUnmount() {
        console.log('Component Unmounting')
    }

    componentDidUpdate(prevProps) {
        // if a new name is entered into the input then the update should now find the new random age for that person
        if (this.props.name !== prevProps.name) {
            console.log('Thee Component Hath Updated')
            // this.setState({memo: 'Thee Component Hath Updated'})
            fetch('https://api.agify.io?name=' + this.props.name).then((response) => {
                return response.json()
            }).then((data) => {
                setTimeout(() => {
                    console.log('Component Did Update')
                    this.setState({person: data})
                }, 3000)
            })
        }
    }


    render() {
        console.log("Rendering The Matrix...", this.state.person)
        return (
            <div className='bryant'>
                {this.state.person === null ? <h1>{this.props.name}'s age is...</h1> : <h1>This Is {this.props.name}'s random age! {this.state.person.age}, Happy birthday!... if it is your birthday...</h1>}
                <p>{this.state.memo}</p>
            </div>
        )
    }
}

export default Cart
