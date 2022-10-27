import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import { aws_stepfunctions as sfn } from 'aws-cdk-lib';
import { aws_stepfunctions_tasks as tasks } from 'aws-cdk-lib';


interface StepFunctionsStackProps extends StackProps {
  prj_name: string;
  lambda: PythonFunction;
//  vpc: ec2.Vpc;
//  ssm_iam_role: iam.Role;
}
export class StepFunctionsStack extends Stack {
  constructor(scope: Construct, id: string, props: StepFunctionsStackProps) {
    super(scope, id, props);

    const stateMachine = new sfn.StateMachine(this, "MyStateMachine", {
      definition: new tasks.LambdaInvoke(this, "MyLambdaTask", {
        lambdaFunction: props.lambda,
      }).next(new sfn.Succeed(this, "GreetedWorld")),
    });

  }
}
