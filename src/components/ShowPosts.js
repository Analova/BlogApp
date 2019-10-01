import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class ShowPosts extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Gategories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownPorps) {
  return { post: posts[ownPorps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(ShowPosts);
