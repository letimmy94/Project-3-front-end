import React, { Component } from 'react';

class FileUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageURL: ''
        }

        this.handleFileUp = this.handleFileUp.bind(this)
    }

    handleFileUp(e) {
        e.preventDefault()

        const data = new FormData()
        data.append
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FileUp;