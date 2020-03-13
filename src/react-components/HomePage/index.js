import React from 'react';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Code Academy',
          link: 'https://codeacademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Coding Website',
          author: {
            name: 'Parardha',
            avatar: '/img/hieu.jpeg'
          }
        },
        {
          id: 2,
          name: 'Code For Startup',
          link: 'https://codeforstartup.com',
          media: '/img/code4startup.jpeg',
          upvote: 81,
          description: 'Another Coding Website',
          author: {
            name: 'Leo',
            avatar: '/img/leo.jpeg'
          }
        }
      ]
    }
  }

  render(){
    return (
      <section>

        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section>
          <section className='container'>

            <ul className='product-list'>

              <li className='product-item'>
                <a className='upvote-button' href='#'>
                  <span><i className="fas fa-chevron-circle-up"></i></span>
                  <br/> {this.state.productList[0].upvote}
                </a>
                <img className='product-list-media' src={this.state.productList[0].media} />
                <section className='product-list-info'>
                  <a href='#'>
                    <h2>{this.state.productList[0].name}</h2>
                  </a>
                  <p>
                    {this.state.productList[0].description}
                  </p>
                  <a href='#'>
                    <img className='small-avatar' src={this.state.productList[0].author.avatar} />
                  </a>
                </section>
                <a className='product-item-link' href={this.state.productList[0].author.avatar}>
                  <span><i className="fas fa-external-link-square-alt"></i></span>
                </a>
              </li>

              <li className='product-item'>
                <a className='upvote-button' href='#'>
                  <span><i className="fas fa-chevron-circle-up"></i></span>
                  <br/> {this.state.productList[1].upvote}
                </a>
                <img className='product-list-media' src={this.state.productList[1].media} />
                <section className='product-list-info'>
                  <a href='#'>
                    <h2>{this.state.productList[1].name}</h2>
                  </a>
                  <p>
                    {this.state.productList[1].description}
                  </p>
                  <a href='#'>
                    <img className='small-avatar' src={this.state.productList[1].author.avatar} />
                  </a>
                </section>
                <a className='product-item-link' href={this.state.productList[1].author.avatar}>
                  <span><i className="fas fa-external-link-square-alt"></i></span>
                </a>
              </li>

            </ul>

          </section>
        </section>

      </section>
    );
  }
}

export default HomePage;
