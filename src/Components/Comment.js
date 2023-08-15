import React from 'react'

function Comment() {
 const [comment, setcomment] = useState("")

 function CreateComment(e) {
    e.preventDefault()
        axios.post("http://localhost:8000/post-create", { title: title, subject: subject, user_id:userData._id})
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data.message) {
                    setData(response.data.message)
                    console.log(response.data.message);
                    navigate("/allpost")

                }else{
                    setData("Please Ty Again")
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
 

 return (
    <div>
        <form onSubmit={CreateComment}>
            <input value={comment} onChange={() => setcomment(e.target.value)} type="text" placeholder='Comment' />
            <input type="text" placeholder='reply' />
        </form>
       
    </div>
  )
}

export default Comment