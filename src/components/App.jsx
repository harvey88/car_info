import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getCarInfo, clearReducer} from '../data/actions/actions'
import '../styled/style.css'
import Hits from '../assets/alert-circle-outline.svg'
import ReactTooltip from 'react-tooltip'


const mapStateToProps = ({result, error}) => ({result, error})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getCarInfo,
        clearReducer
    }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            error: {},
            value: ''
        } 
    }

    static getDerivedStateFromProps(props, state) {
        if (JSON.stringify(state.error) !== JSON.stringify(props.error)) {
            return {
                error: props.error
            }
        }
        if (JSON.stringify(state.result) !== JSON.stringify(props.result)) {
            return {
                result: props.result
            }
        }
        return null
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })        
    }

    checkCarInfo = (key) => {
        const { actions: {getCarInfo, clearReducer} } = this.props
        if (key === 13) {
            clearReducer()

            const interval = async () => {
                await new Promise((res, req) => { 
                    setTimeout(res, 0)
                })
                    getCarInfo(this.state.value)
            }
            interval()
        }
    }
    render() {
        const { result, error } = this.state
        return (
            <div>
                <div className='wrapper_input'>
                    <input 
                        className='input'
                        type="text" 
                        onKeyPress={(event) => this.checkCarInfo(event.which)}
                        onChange={(e) => this.handleChange(e)}/>
                            <Hits data-tip data-for={'hint'} className='icon'/>
                        <ReactTooltip className={'custom_tooltip'} id={'hint'} type='dark' effect='float' place='top' >
                            <span>Enter number like AA9999AI</span>
                        </ReactTooltip>
                </div>
                {Object.values(error).length ?
                    <p className='wrapper_error'>
                        {error.error }
                    </p>
                : null}
                {Object.keys(result).length ? (
                    Object.values(result).map((el, i)=> {
                        return (
                            <div className='wrapper_table' key={i}>
                                <div className='wrapper_table_header'>
                                    <p>Owner</p>
                                    <p>Year</p>
                                    <p>Owners Count</p>
                                    <p>Crashes Count</p>
                                </div>
                                <div className='wrapper_table_body'>
                                    <p >{el.owner}</p>
                                    <p>{el.year}</p>
                                    <p>{el.ownersCount}</p>
                                    <p>{el.crashesCount}</p>
                                </div>
                            </div>
                        )
                    })
                ): null}
                
                
            </div>
        )
    }
}

export default App