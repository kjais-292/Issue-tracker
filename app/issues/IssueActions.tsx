import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
// import IssueStatusFilter from './IssueStatusFilter';

const IssueActions = () => {
  return (
    <div className="mb-5">
      {/* <IssueStatusFilter /> */}
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;