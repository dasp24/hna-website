const website = React.createClass({
  render: function() {
    return (
      <div>
        <h1 id='contact_details'>0161 202 1199</h1>
        <img src={('./newlogo.jpg')} id='logo'/>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/artist" activeClassName="active">Artist Trailers</Link></li>
          <li><Link to="/costume" activeClassName="active">Costume Trailers</Link></li>
          <li><Link to="/makeup" activeClassName="active">Makeup Trailers</Link></li>
          <li><Link to="/offices" activeClassName="active">Production Offices</Link></li>
          <li><Link to="/dining" activeClassName="active">Dining Trailers</Link></li>
          <li><Link to="/honey" activeClassName="active">Honey Wagons</Link></li>
          <li><Link to="/tech" activeClassName="active">Technical vehicles</Link></li>
          <li><Link to="/support" activeClassName="active">Support</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default website;