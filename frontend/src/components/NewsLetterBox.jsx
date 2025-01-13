import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Follow Kami di Instagram</p>
            <p className="text-gray-400 mt-3">
                Dapatkan informasi terbaru dan event seru langsung dari Instagram kami!
            </p>
            <div className="my-6">
                <button
                    onClick={() => window.open("https://www.instagram.com/username", "_blank")}
                    className="bg-black text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Kunjungi Instagram
                </button>
            </div>
        </div>


    )
}

export default NewsLetterBox
