import './Home.css';
import avatar from '../images/img_avatar.png';

function Home(){
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">George Ryder - React Portfolio</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu hendrerit urna. Donec commodo luctus vulputate.</p>
                    <img src={avatar} alt="Portfolio avatar" className='avatar'></img>
                </div>
            </div>
            <div className='textSection'>
                <h3 className='AboutMe'>About Me</h3>
                <p className='aboutMeText'>Sed vel viverra ex, a mattis felis. Fusce faucibus diam ut mauris iaculis, ac efficitur turpis sollicitudin. Nullam sit amet massa et felis dapibus facilisis vel non metus. Fusce risus velit, luctus at suscipit et, scelerisque in augue. Donec fermentum turpis quam, sit amet accumsan metus accumsan in. Praesent ultricies magna nec est pretium lacinia sit amet eget nisi. Etiam id lacus ante. Suspendisse sed fringilla quam. Sed suscipit efficitur lacinia. In sagittis velit ut neque dapibus mollis. Sed elementum dui vel risus placerat consectetur. Aliquam bibendum scelerisque porta. Vivamus pretium augue vel sapien efficitur, eu suscipit velit laoreet.</p>

                <p className='aboutMeText'>Nunc a justo sit amet magna varius maximus non sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla porttitor, ligula ut fringilla volutpat, eros nibh mattis neque, commodo viverra tellus risus in est. Quisque non feugiat augue. Maecenas a sodales dui. Donec non erat laoreet, eleifend felis et, consectetur eros. Sed et metus lacinia, aliquam mi at, bibendum diam. Nullam vitae pellentesque turpis. Proin mollis, nunc vel pellentesque dictum, mauris lectus vehicula lacus, sit amet viverra quam sapien elementum enim.</p>
            </div>
        </div>      
    );
}

export default Home;