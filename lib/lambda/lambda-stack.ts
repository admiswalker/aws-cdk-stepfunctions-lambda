import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

interface LambdaStackProps extends StackProps {
  prj_name: string;
}
export class LambdaStack extends Stack {
  public readonly lambda: PythonFunction;
  constructor(scope: Construct, id: string, props?: LambdaStackProps) {
    super(scope, id, props);

    this.lambda = new PythonFunction(this, 'LambdaFunction', {
      entry: 'lib/lambda/src',
      runtime: Runtime.PYTHON_3_9,
      index: 'index.py', 
    });
    
  }
}
