import React from 'react';
const Card = ({ cardData }) => {
    return (
        <div>

            <div class="container-lg">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cardData.map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div class="col">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title">{item.category}</h5>
                                                <h2 class="card-header">{item.price}</h2>
                                                <ul class="list-group">
                                                    <li class="list-group-item">{item.user}</li>
                                                    <li class="list-group-item">{item.storage}</li>
                                                    <li class="list-group-item">{item.project}</li>
                                                    <li class="list-group-item">{item.access}</li>
                                                    <li class="list-group-item">{item.private}</li>
                                                    <li class="list-group-item">{item.support}</li>
                                                    <li class="list-group-item">{item.sub}</li>
                                                    <li class="list-group-item">{item.report}</li>
                                                </ul>
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary">BUTTON</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

        </div>
    );
};

export default Card;

