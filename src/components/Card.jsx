import React from 'react';

function Card({
    titleLine1,
    titleLine2,
    highlightColor = '#B9FF66',
    bgColor = '#F3F3F3',
    arrowIcon,
    mainImage,
    linkText = 'Learn More',
    linkColor,
}) {
    return (
        <div
            className="a w-[600px] h-[310px] border rounded-[45px] p-[50px] flex justify-between items-center"
            style={{ backgroundColor: bgColor }}
        >
            <div className="flex flex-col justify-between gap-20">
                <div className="font-medium text-[30px] leading-[100%]">
                    <h3
                        className="max-w-max px-3 pb-2 rounded"
                        style={{ backgroundColor: highlightColor }}
                    >
                        {titleLine1}
                    </h3>
                    <h3
                        className="max-w-max px-3 rounded"
                        style={{ backgroundColor: highlightColor }}
                    >
                        {titleLine2}
                    </h3>
                </div>

                <div className="flex items-center gap-5">
                    {arrowIcon && <img src={arrowIcon} alt="arrow" width={41} />}
                    <p className="text-[20px]" style={{ color: linkColor }}>{linkText}</p>
                </div>
            </div>

            <div>
                {mainImage && <img src={mainImage} alt="main" />}
            </div>
        </div>
    );
}

export default Card;
