// Import necessary dependencies and styles

const data = [
    { question: "Who is Elon Musk?" },
    { question: "When was the birthday of chatGPT?" },
    { question: "Talk about MERN Stack" },
    { question: "What is JavaScript" },
  ];
  
  function InitialCard({setSelection}) {

   const handleSelect=(item)=>{

        console.log(item)
    }

    return (
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <Card key={index}  question={item.question} />
        ))}
      </div>
    );
  }
  
  function Card({ question }) {
    return (
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 ">
        <span className="flex  p-6 border  rounded-lg shadow">
          <p className="font-normal text-gray-700 ">{question}</p>
        </span>
      </div>
    );
  }
  
  export default InitialCard;
  