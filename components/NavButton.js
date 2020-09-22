import Link from "next/link";
import {
  Typography,
} from "@material-ui/core";
import { useRouter, withRouter } from "next/router";

const NavButton = props => {
  const router = useRouter()
  return (
    <Link href={props.path}>
      <a style={{textDecoration: 'none', color: 'inherit'}}>
        { router.pathname === props.path ?
          <Typography 
            variant="body1" 
            style={{
              color: "#fff", 
              fontWeight: 'bold',
              fontStyle: "italic",
              fontSize: 16, 
              top: props.noBorder ? 17 : 2,
              position: 'relative',
            }}
          >
            {props.label}
          </Typography> :
          <Typography 
            variant="body1" 
            style={{
              color: "#fff", 
              fontWeight: 'normal', 
              fontSize: 14, 
              top: props.noBorder ? 19 : 4,
              position: 'relative',
            }}
          >
            {props.label}
          </Typography> 
        }
      </a>
    </Link>
  );
};

export default withRouter(NavButton);
