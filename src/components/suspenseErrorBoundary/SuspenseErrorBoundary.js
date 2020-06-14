import React, { Fragment } from 'react';
import { LoadingIndicator } from 'components';
import './SuspenseErrorBoundary.css'

class SuspenseErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
    // logErrorToMyService(error, errorInfo);
    // console.log(error);
  }

  tryAgain = () => {
    // await queryCache.refetchQueries ('budget');
    this.setState({ hasError: false }) //wystarczy zmienić flagę i sprawdzanie będzie ponowione
  }

  render() {
    return <React.Suspense fallback={<LoadingIndicator />}>
      {this.state.hasError ? (
        <div>
          <h4>Nie mogę pobrać danych...</h4>
          <button className="button_w button_w_red" onClick={() => this.tryAgain()}>Spróbuj jeszcze raz</button>
        </div>
      ) : (
          <Fragment>
            {this.props.children}
          </Fragment>
        )
      }
    </React.Suspense>
  }
}

export default SuspenseErrorBoundary;