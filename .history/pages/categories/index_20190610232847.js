const JobCategories = props => (
    <li>
      <Link href={`/?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );