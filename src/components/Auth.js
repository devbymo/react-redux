import classes from './Auth.module.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = () => {
  // Redux data.
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  console.log(isAuth);

  // Local data.
  const email = useRef('');
  const password = useRef('');

  // Submit handler.
  const submitHandler = (e) => {
    e.preventDefault();

    // Simple login validation just for testing.
    if (email.length === 0 || password.length === 0) {
      console.log('Unable to login!');
      return;
    }

    // Dispatch.
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={email} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={password} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
