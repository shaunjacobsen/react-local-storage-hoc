import React from 'react';

const utiliserStockageLocal = WrapperComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);

      state = {
        stockageLocalDisponible: false,
      };
    }

    componentDidMount() {
      this.verifierDisponibiliteDuStockageLocal();
    }

    verifierDisponibiliteDuStockageLocal() {
      const essai = 'essai';

      try {
        localStorage.setItem(essai, essai);
        localStorage.removeItem(essai);
        this.setState({ stockageLocalDisponible: true });
      } catch (e) {
        this.setState({ stockageLocalDisponible: false });
      }
    }

    charger(cle) {
      if (this.state.stockageLocalDisponible) {
        return localStorage.getItem(cle);
      }

      return undefined;
    }

    sauvegarder(cle, infos) {
      this.state.stockageLocalDisponible && localStorage.setItem(cle, infos);
    }

    supprimer(cle) {
      this.state.stockageLocalDisponible && localStorage.removeItem(cle);
    }

    render() {
      return (
        <WrapperComponent
          load={this.charger}
          charger={this.charger}
          save={this.sauvegarder}
          sauvegarder={this.sauvegarder}
          remove={this.supprimer}
          supprimer={this.supprimer}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default utiliserStockageLocal;
