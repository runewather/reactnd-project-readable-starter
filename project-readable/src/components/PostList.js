import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { handleFetchPosts } from '../actions/PostActions'

const SORT_DATE = 'DATE'
const SORT_VOTES = 'VOTES'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedValue:'DATE'
        }
    }

    componentDidMount() {
        const { category } = this.props.match.params
        if(!category) {            
            this.props.dispatch(handleFetchPosts())
        } 
    }

    showPostList = () => {
        return Object.values(this.props.posts).filter(post => !post.deleted).sort((a, b) => {
            switch(this.state.selectedValue) {
                case SORT_DATE:
                    return b.timestamp - a.timestamp
                case SORT_VOTES:
                    return b.voteScore - a.voteScore  
                default:
                    return b.timestamp - a.timestamp              
            }
        }).map((post) => {
            return (
                <Post key={generateUID()} 
                isSinglePage={false}
                id={post.id}
                title={post.title} 
                author={post.author} 
                body={post.body} 
                voteScore={post.voteScore}
                category={post.category}
                timestamp={post.timestamp}
                commentCount={post.commentCount} />
            )
        })
    }

    onChangeSortType = (e) => {
        this.setState({selectedValue:e.target.value})
        this.showPostList()
    }

    render() {      
        return (
            <Fragment>
                <h3>Order By</h3>                
                <select value={this.state.selectedValue} onChange={this.onChangeSortType}>                    
                    <option value='DATE'>Date</option>
                    <option value='VOTES'>Votes</option>
                </select>      
                { this.showPostList() }           
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts : {
      ...state.posts
    }
})

export default connect(mapStateToProps)(PostList)