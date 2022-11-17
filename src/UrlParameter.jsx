import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter</h1>
      <p>パラメーターは {id} です。</p>
      {query.get("name") ? (
        <p>クエリパラメーターnameは {query.get("name")} です。</p>
      ) : null}
    </div>
  );
};
