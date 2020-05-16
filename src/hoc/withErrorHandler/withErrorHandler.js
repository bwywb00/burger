import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {

            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {

            console.log("I'm ErrorHandler");

            return (
                <Aux>
                    {/* 
                        여기서 modalClosed prop은 <Backdrop /> 를 클릭할 때 
                        작동하는 Method로, withErrorHandler의 error = false 해서
                        Error와 관련된 Modal을 Off한다
                     */}
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;