import React from 'react';

import Container from './Container';

const Message = props => {
  return (
    <Container>
      <article className={`my-message message ${props.isInfo ? 'is-info' : ''}`}>
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>.
        </div>
      </article>
    </Container>
  );
};

export default Message;
