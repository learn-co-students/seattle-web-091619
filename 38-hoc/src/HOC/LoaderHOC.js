import React from 'react'
import Loader from './Loader'

const LoaderHOC = WrappedComponent => {
    return class LoaderHOC extends React.Component {

        isReady = () => {
            return this.props.season.Races.length > 0;
        }

        render() {
            return this.isReady()?<WrappedComponent {...this.props} />:<Loader />
        }
    }
}

export default LoaderHOC