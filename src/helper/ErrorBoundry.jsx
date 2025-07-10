import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
        this.setState({ error: error });
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    margin: '20px auto',
                    maxWidth: '500px',
                    border: '2px solid #ff4444',
                    borderRadius: '10px',
                    backgroundColor: '#fff5f5',
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <h2 style={{ color: '#ff4444', marginBottom: '15px' }}>
                        😵 Oops! Something went wrong
                    </h2>
                    <p style={{ color: '#666', marginBottom: '20px' }}>
                        Don't worry! This happens sometimes. You can try again or refresh the page.
                    </p>

                    <div>
                        <button
                            onClick={this.handleReset}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#ff4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginRight: '10px',
                                fontSize: '14px'
                            }}
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
