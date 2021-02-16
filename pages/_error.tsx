import React from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPageContext } from "next";

const Error = ({ statusCode }: InferGetStaticPropsType<GetStaticProps>): React.ReactElement => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>;
};

Error.getStaticProps = ({ res, err }: NextPageContext): InferGetStaticPropsType<GetStaticProps> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
