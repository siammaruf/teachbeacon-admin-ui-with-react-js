import React from 'react';

const Blocks = ({item}) => {

    switch (item.variant) {
        case "paragraph":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <article>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                    </div>
                </div>
            );
        case "paragraphHeading":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <article>
                            <strong>Heading</strong>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                    </div>
                </div>
            );
        case "paragraphSubHeading":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <article>
                            <strong>Subheading</strong>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </article>
                    </div>
                </div>
            );
        case "heading":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <article>
                            <strong>Heading</strong>
                        </article>
                    </div>
                </div>
            );
        case "imageCenter":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <img className="img-fluid" src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg" alt=""/>
                    </div>
                </div>
            );
        case "imageFullWidth":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area" style={{paddingLeft:0,paddingRight:0}}>
                        <img className="img-fluid" src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg" alt=""/>
                    </div>
                </div>
            );
        case "imageText":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <div className="w-50">
                            <p style={{
                                fontSize:12,
                                lineHeight:'14px',
                                margin:0
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="w-50">
                            <img className="img-fluid" src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            );
        case "textOnImage":
            return (
                <div className="block-item">
                    <span className="block-title text-capitalize">{item.title}</span>
                    <div className="item-text-area">
                        <div style={{
                            backgroundImage:`url("https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg")`,
                            backgroundSize:'cover',
                            minHeight:150,
                            display:'flex',
                            alignItems:'center',
                            padding:10
                        }}>
                            <p style={{
                                fontSize:12,
                                lineHeight:'16px',
                                color:'#ffffff'
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div>{item.title}</div>
            );
    }
};

export default Blocks;