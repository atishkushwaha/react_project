import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss"
class Directory extends React.Component {

    constructor() {

        super();

        this.state = {
            sections: [
                {
                    title:'hats',
                    imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2863064-0abc-4afd-9280-0d9e402c880d/authentics-mens-track-jacket-HgQM4q.png',
                    id:1
                },
                {
                    title:'jacket',
                    imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2863064-0abc-4afd-9280-0d9e402c880d/authentics-mens-track-jacket-HgQM4q.png',
                    id:2
                },
                {
                    title:'sneakers',
                    imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2863064-0abc-4afd-9280-0d9e402c880d/authentics-mens-track-jacket-HgQM4q.png',
                    id:3
                },
                {
                    title:'Mens',
                    imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2863064-0abc-4afd-9280-0d9e402c880d/authentics-mens-track-jacket-HgQM4q.png',
                    size:'large',
                    id:4
                }, 
                {
                    title:'women',
                    imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2863064-0abc-4afd-9280-0d9e402c880d/authentics-mens-track-jacket-HgQM4q.png',
                    size: 'large',
                    id:5
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,id,imageUrl,size}) =>{
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    })
                }
            </div>
        )
    }
}

export default Directory;