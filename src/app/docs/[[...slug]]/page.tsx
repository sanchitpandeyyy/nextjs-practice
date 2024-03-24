import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
    if (params.slug?.length===2){
  return <h1>
    Viewing all docs for {params.slug[0]} and {params.slug[1]} 
    </h1>
} else if(params.slug?.length===1) {

return <h1>Viewing docs for {params.slug[0]}</h1>
}
return <h1>Docs segment</h1>
};

export default Docs;
