import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

//import { PythonFunction } from '@aws-cdk/aws-lambda-python';
//import * as lambda_nodejs from '@aws-cdk/aws-lambda-nodejs'; // $ npx npm install @aws-cdk/aws-lambda-nodejs
//import * as cdk from '@aws-cdk/core';

interface LambdaStackProps extends StackProps {
  prj_name: string;
}
export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: LambdaStackProps) {
    super(scope, id, props);

    new PythonFunction(this, 'LambdaFunction',{
      entry: 'lib/lambda/src',
      runtime: Runtime.PYTHON_3_9,
      index: 'index.py', 
    });
    
  }
}
