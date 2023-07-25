import { useState } from "react"
import { Alert, Button } from 'react-bootstrap';
import Black from './Black.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
const Task4 = () => {
    const [data, setdata] = useState([])



    const handlesubmit = (e) => {
        e.preventDefault()
        const val = document.getElementById("input").value

        if (val == "") {
            alert(" Sorry! Cannot be empty")
        } else {
         const checktask=data.filter((element)=>element.task==val)
        console.log(checktask)
        checktask.length==0?
            setdata([...data, { task: val, createdOn: new Date().toLocaleString(), isDeleted: false }]):alert("Already in the Task")

        }
    }


    const handeldelete = (i) => {
        data[i].isDeleted = true
        const updatedArray = [...data]
        setdata(updatedArray)
        
    }

    const handleupdate = (i) => {
        data[i].isUpdate = true
        const updatedArray1 = [...data]
        setdata(updatedArray1)
        setTimeout(() => {
            data[i].isUpdate = false
            setdata(updatedArray1)
        }, 3000)

    }

    const handelchanges = (event, obj) => {
        const updatedvalue = event.target.value
        obj.task = updatedvalue
    }

    return (
      <div style={{ backgroundColor: "#93c5fd", paddingBottom: "8px" }}>
        <div
          className="container"
          style={{
            backgroundImage: `url(${Black})`,
            height: "100vh",
            // marginBottom: "16px",

            padding: "8px",
          }}
        >
          <Alert
            variant="warning"
            className="container"
            style={{ color: "black" }}
          >
            <strong style={{  fontSize: "20px" }}>
              TO DO LIST
            </strong>
          </Alert>

          <form style={{ margin: "10px" }}>
            <label>
              Enter Task:{" "}
              <input
                placeholder="Enter your task"
                name="task"
                id="input"
                type="text"
              />
            </label>
            <Button
              variant="warning"
              onClick={handlesubmit}
              style={{ marginLeft: "10px" }}
            >
              Add
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setdata([]);
                document.getElementById("input").value = "";
              }}
              style={{ marginLeft: "10px" }}
            >
              Reset
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                window.location.reload();
              }}
              style={{ marginLeft: "10px" }}
            >
              Reload
            </Button>
          </form>
          <b style={{ color: "yellow", fontSize: "20px" }}>
            {" "}
            Tasks to complete
          </b>
          <div>
            {data?.map((e, i) => {
              return (
                <div
                  key={i}
                  style={{ backgroundColor: "white", margin: "5px" }}
                >
                  <div
                    style={{
                      border: "2px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: e.isDeleted ? "line-through" : "none",
                    }}
                  >
                    <div
                      id={`div${i}`}
                      style={{
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ margin: "10px" }}>{i + 1}.</span>
                      <span style={{ margin: "10px" }} id="removespan1">
                        {e?.task}
                      </span>
                      <span style={{ marginLeft: "200px" }} id="removespan2">
                        Created-at:{e?.createdOn}
                      </span>
                      {e.isUpdate ? (
                        <div className="ms-2">
                          Update Task-{" "}
                          <input
                            onChange={(event) => {
                              handelchanges(event, e);
                            }}
                          ></input>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      {e.isUpdate ? (
                        <Button
                          variant="success"
                          onClick={() => handleupdate(i)}
                          style={{ marginRight: "10px" }}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          variant="warning"
                          onClick={() => handleupdate(i)}
                          style={{ marginRight: "10px" }}
                        >
                          Update
                        </Button>
                      )}

                      <DeleteIcon onClick={() => handeldelete(i)}></DeleteIcon>
                      {/* <                                    img src={require("/Users/paranjaynajan/Desktop/Learning/website/myapp/src/pages/logo.png")} alt="logo" height={30} onClick={() => handeldelete(i)} /> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );

}
export default Task4