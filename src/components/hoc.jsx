import React from 'react'

const Hoc = (WrappedComponent) => {
    class NewComponent extends React.Component {
        render() {
            return (
                <div>
                    <p>Hoc view</p>
                    <WrappedComponent />
                </div>
            )
        }
    }

    return NewComponent
}

export default Hoc